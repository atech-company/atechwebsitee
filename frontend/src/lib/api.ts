const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:8000/api";
const API_HOST_URL = API_BASE_URL.replace(/\/api\/?$/, "");

type ApiResponse<T> = {
  success: boolean;
  data: T;
  message?: string;
};

export type PageData = {
  title: string;
  slug: string;
  content: string | null;
  hero_title: string | null;
  hero_subtitle: string | null;
  meta_title: string | null;
  meta_description: string | null;
};

export type ServiceData = {
  title: string;
  slug: string;
  short_description: string;
  content: string | null;
};

export type ProjectData = {
  title: string;
  slug: string;
  short_description: string;
  full_description: string;
  cover_image: string | null;
  gallery_images: string[] | null;
  technologies: string[] | string | null;
  project_url: string | null;
};

export async function apiGet<T>(path: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    next: { revalidate: 120 },
  });

  if (!response.ok) throw new Error(`Request failed: ${response.status}`);

  const payload = (await response.json()) as ApiResponse<T>;
  if (!payload.success) throw new Error(payload.message ?? "API error");
  return payload.data;
}

export function getAssetUrl(path: string | null | undefined): string | null {
  if (!path) return null;
  const trimmedPath = path.trim();
  if (!trimmedPath) return null;

  if (trimmedPath.startsWith("http://") || trimmedPath.startsWith("https://")) {
    return trimmedPath;
  }

  const normalizedPath = trimmedPath
    .replaceAll("\\", "/")
    .replace(/^\.?\//, "");

  const storageRelative = normalizedPath
    .replace(/^public\//, "")
    .replace(/^storage\/app\/public\//, "")
    .replace(/^storage\//, "");

  if (normalizedPath.startsWith("storage/") || normalizedPath.startsWith("public/storage/")) {
    return `${API_HOST_URL}/storage/${storageRelative}`;
  }

  return `${API_HOST_URL}/${storageRelative}`;
}

export enum typeMember {
  coordinator = "Coordinator",
  committee = "Committee",
  observer = "Observer",
  vice = "Vice",
}

export type Region = {
  id: number;
  name: string;
  slug: string;
};

export type Country = {
  id: string;
  name: string;
  slug: string;
  description?: string;
  urlImg: string;
  webSite?: string;
  socialMedia?: SocialMedia;
  members?: Member[];
  coordinators?: Member[];
  region_id?: number;
};

export type SocialMedia = {
  instagram?: string;
  facebook?: string;
  x?: string;
  youtube?: string;
};

export type Member = {
  id: string;
  name: string;
  affiliation: string;
  url_image: string;
  email?: string;
  description?: string;
  active: boolean;
  role: typeMember;
  appointed_end: string;
  appointed_start: string;
};

export type RegionData = {
  region: Region;
  countries: Country[];
};

export type CountryData = {
  country: Country;
  activer_members: Member[];
  others_members: Member[];
  social_media: SocialMedia;
  region: Region;
};

export const enum TypeEvent {
  in_person = "in_person",
  online = "online",
  hybrid = "hybrid",
}

type Category = {
  id: number;
  name: string;
};

export type Event = {
  id: number;
  name: string;
  country: string;
  city: string;
  latitude: string;
  longitude: string;
  brief_description: string;
  start_date: string;
  end_date: string;
  website: string;
  organizer: string;
  contact_name: string;
  contact_email: string;
  location_of_event: TypeEvent;
  keywords: string[];
  participants: number;
  iau_member?: Country;
  active: boolean;
  created_at: string;
  updated_at: string;
  event_image_url?: string;
  categories: Category[];
};

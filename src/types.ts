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
  socialMedia: SocialMedia;
  members: Member[];
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
  members: Member[];
  social_media: SocialMedia;
};

export type TypeMember = {
  coordinator: "coordinator";
  observer: "observer";
  committee: "committee";
  vice: "vice";
};

export type Region = {
  id: string;
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
  urlImage: string;
  email?: string;
  description?: string;
  active: boolean;
  role: TypeMember;
  appointed_end: "YYYY-MM-DD";
  appointed_start: "YYYY-MM-DD";
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

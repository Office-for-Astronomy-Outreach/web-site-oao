export type TypeMember = {
  coordinator: "coordinator";
  observer: "observer";
  committee: "committee";
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
  typeMember: TypeMember;
  appointedPeriod: {
    start: string;
    end?: string;
  };
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

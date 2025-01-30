export type LoginFields = {
  email: string;
  password: string;
};

export type Video = {
  id: number;
  title: string;
  description: string;
  url: string;
};

export type SearchVideoResponse = {
  message: string;
  result: { results: Result[] };
};

export type Result = {
  metadata: Metadata;
  content: string;
};

type Metadata = {
  video: string;
  id: string;
  job_id: string;
};

export type LoginResponse = {
  message: string;
  token: string;
};

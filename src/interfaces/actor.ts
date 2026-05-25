export interface Cast {
  id: number;
  cast: CastElement[];
  crew: CastElement[];
}

export interface CastElement {
  adult: boolean;
  gender: number;
  id: number;
  known_for_department: Department;
  name: string;
  original_name: string;
  popularity: number;
  profile_path: null | string;
  cast_id?: number;
  character?: string;
  credit_id: string;
  order?: number;
  department?: Department;
  job?: string;
}

export type Department =
  | "Acting"
  | "Art"
  | "Camera"
  | "Costume & Make-Up"
  | "Crew"
  | "Directing"
  | "Editing"
  | "Lighting"
  | "Production"
  | "Sound"
  | "Visual Effects"
  | "Writing";

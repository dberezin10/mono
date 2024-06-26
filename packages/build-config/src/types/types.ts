export interface BuildPaths {
    entry: string;
    html: string;
    output: string;
    src: string;
}

export type BuildMode = "development" | "production";

export interface EnvVariables {
    mode: BuildMode
    port: number
    analyzer?: boolean;
}

export interface BuildOptions {
    port: number;
    paths: BuildPaths;
    mode: BuildMode;
    analyzer?: boolean;
}
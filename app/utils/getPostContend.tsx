import fs from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import { POSTS_DIRECTORY } from "../constants/paths";

export function getPostContent(
  slug: string | string[] | undefined
): GrayMatterFile<string> | undefined {
  const folder = POSTS_DIRECTORY + "/";
  const file = folder + `${slug}.md`;
  if (!fs.existsSync(file)) {
    return undefined;
  }
  const content = fs.readFileSync(file, "utf8");
  const matterResult = matter(content);
  return matterResult;
}

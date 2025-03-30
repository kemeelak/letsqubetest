import _ from "lodash";

export const parseEmails = (string: string): string[] => {
  return _.uniq(`${string}`.split(/[,\s]+/))
    .filter((s: any) => !!s)
    .map((email: string) => email.toLowerCase());
};

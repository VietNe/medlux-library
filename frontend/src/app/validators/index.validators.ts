import { Validators } from "@angular/forms";

const nonWhiteSpaceRegExp: RegExp = new RegExp("\\S");
export const TrimValidator = () => Validators.pattern(nonWhiteSpaceRegExp);

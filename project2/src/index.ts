import {formatNumber, ParsedNumber} from "libphonenumber-js";

export namespace My.Project2 {

   export class MyClass {
      public someMethod(): string {
         const number: ParsedNumber = {
            country: "DE",
            phone: "04411234321"
         };
         const formattedNumber = formatNumber(number, "NATIONAL");

         return "String from project 2: " + formattedNumber
      }
   }

}
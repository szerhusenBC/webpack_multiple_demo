import {formatNumber, ParsedNumber} from "libphonenumber-js";
import {My2} from "./AnotherClass";

namespace My1.Project1 {

   export class MyClass1 {
      public someMethod(): void {
         const number: ParsedNumber = {
            country: "DE",
            phone: "04411234321"
         };
         const formattedNumber = formatNumber(number, "NATIONAL");

         const foo: string = My2.Project1.AnotherClass.myMethod();

         console.log(foo);
         console.log(formattedNumber);
      }
   }

}

new My1.Project1.MyClass1().someMethod();
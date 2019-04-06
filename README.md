# _Beep Boop_

#### _A web application that takes a number from a user and returns a range of numbers, 04/05/2019_

#### By _**Zsuzsanna Mangu**_

## Description

A web application that takes a number from a user and returns a range of numbers from 0 to the user inputted number with these exceptions: 1. Numbers that contain a 1: all digits are replaced with "Beep!" 2. Numbers that contain a 2: all digits are replaced with "Boop!" 3. Numbers that contain a 3: all digits are replaced with "I'm sorry, Dave. I'm afraid I can't do that".

Here is the link to the web application on gh-pages: https://zsuzsannamangu.github.io/beep-boop/

### Specifications

| Behavior | Input | Output |
| -------- | ----- | ------ |
| The program returns a range of numbers from 0 to the user's inputted number | 0 | 0 |
| The program returns "I'm sorry, Dave. I'm afraid I can't do that." if the inputted number contains 3. | 3 | "I'm sorry, Dave. I'm afraid I can't do that." |
| The program returns "Boop" if the inputted number contains 2. | 2 | "Boop" |
| The program returns "Beep" if the inputted number contains 1. | 1 | "Beep" |
| 3 overrides 1 and 2 so if the inputted number contains 3, and 2 or 1 (or both), the program returns "I'm sorry Dave, I'm afraid I can't do that." | 123 | "I'm sorry, Dave. I'm afraid I can't do that." |
| 2 overrides 1 so if the inputted number contains 2 and 1, the program returns "Boop". | 2 | "Boop" |

## Setup/Installation Requirements

* _Clone repository_
* _Open index.html in Chrome_

## Support and contact details

_Feel free to email to zsuzsannamangu@gmail.com with any questions._

## Technologies Used

_HTML, CSS, JavaScript, jQuery_

### License

*MIT*

Copyright (c) 2019 **_Zsuzsanna Mangu_**

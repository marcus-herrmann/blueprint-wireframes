# Responsive content reference wireframes in a blueprint style

Based on Stephen Hays' idea of content reference wireframes and some [sightings on Dribbble](https://dribbble.com/shots/782399-Blueprint-Wireframe).

## Idea

Static wireframes aren't always the best option for responsive workflows, nor are too detailed wireframes. By creating simple sketches in HTML and using the blueprint metaphor, this little toolkit aims to match both modern device contexts and the fact that wireframes are not design proposals.

## Demo
http://demo.marcus.io/blueprint-wireframes/

## Configuration
### Building your own particular wireframes
Two CSS files are referenced in index.html, blueprint-wireframes.css and style.css. While blueprint-wireframes.css serves generic styles for the blueprint look, style.css is meant to be  createded individually for every wireframe page.

### Legend
If you are chosing to reference bits of content by numbers (like in the demo and screenshots above) provide a legend.

### Explaining your approach
Sometimes it happens that you write a mail to your customer, explaining the necessary bits of your approach and add a link to a blueprint wireframe. But then this the customer only clicks on the link and ignores your explaining text completely. For this case, you can start with a welcome modal window, which can by applied by

 ```
<body onload="$('.hint-welcome').trigger('openModal');">
 ```

WTF, onload inline, you say? Here's why:

## Coding style
Keep in mind that this is non-production, throwaway code. That's why I avoided on purpose:

* Minification of scripts and styles
* CSS Preprocessors
* Performance tweeks
* BEM/OOCSS
* Build scripts
* Linting

…and almost any other best practice action I usually take when coding a website. Blueprint wireframes are meant to transport an idea or concept, not to pass every code review there is. Use some common sense, though.

## Compatibility
* IE9+ (but feel free to polyfill responsive behaviours in legacy IEs)
* Needs activated JavaScript (but feel free to build the modal logic in CSS)

## Credits
* Graphics used based on "Free Blueprint Wireframe PSD Kit" by Göksel Vancin: https://www.behance.net/gallery/Free-Blueprint-Wireframe-PSD-Kit/10952285 (CC BY-NC 3.0)
* Redacted font by Christian Naths (https://github.com/christiannaths/Redacted-Font) and licensed   under the SIL Open Font License, Version 1.1 (see /fonts/OFL.txt)
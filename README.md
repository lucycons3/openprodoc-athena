# Athena, clean and responsive theme for OpenProdoc

Athena is a clean and responsive theme for the OPAC and Contribution modules of [OpenProdoc](https://github.com/JHierrot/openprodoc).

This theme was designed by [Ana Amelia Patiño Esteo](https://github.com/lucycons3), from [LC3](https://www.lucycons3.eu/).

The code is licensed under the [GNU Affero General Public License v3.0](https://github.com/lucycons3/openprodoc-athena/blob/master/LICENSE).

Check out the [Historical Archive of Greenpeace Spain](https://archivo-historico.greenpeace.es) for a live demo.

## Table of contents

* [Features](#features).
* [Compatibility](#compatibility).
* [Install](#install).
* [Custom pages](#custom-pages).
* [Multi-language support](#multi-language-support).
* [Cookies consent message](#cookies-consent-message).
* [Screenshots](#screenshots).
* [Additional information](#additional-information).
* [Contributors](#contributors).
* [Acknowledgements](#acknowledgements).

## Features

* Clean and responsive design.
* Cross-browser compatibility.
* Displays the logo of the organisation.
* Navigation bar.
* Support for multi-language sites.
* Cookies consent message.
* Written in pure JavaScript and CSS.
* Integration with baguetteBox.js to easily create image galleries.

## Compatibility

OpenProdoc:

* OpenProdoc Portable Web 2.3+.
* OpenProdoc Web 2.3+.

Browsers:

* Firefox 65+.
* Chrome/Chromium 72+.
* Edge 44+.
* Opera 58+.
* Safari 11+.

## Install

1. Upload all the content of `system/` to the `System` folder of your OpenProdoc instance. Notice that 'opac-report.html' and 'contrib-report.html' are report templates, so they need to be uploaded with the document type `Reports/export of Docs and Folders`.
2. Copy all the content of `css/` under the directory `../webapps/css/` of your OpenProdoc instance.
3. Copy all the content of `js/` under the directory `../webapps/js/` of your OpenProdoc instance.
4. Copy all the content of `img/` under the directory `../webapps/img/` of your OpenProdoc instance.
5. Update the ID of the following fields in the OPAC properties file, so they point to the files of the theme:
    - `ResultForm`.
    - `FormSearchCSS`.
    - `FormSearchLogo`.
    - `UrlHelp`.
    - `HtmlAgent0`, `HtmlAgent1` and `HtmlAgent2`.
6. Update the ID of the following fields in the Contribution properties file, so they point to the files of the theme:
    - `ContribCSS`.
    - `DocsReportId`.
    - `UrlHelp`.
    - `HtmlAgentLog0`.
    - `HtmlAgentList0`.
    - `HtmlAgentAdd0`.
    - `HtmlAgentRes0`.
7. Check out that all the links in the HTML files of your OpenProdoc site point to the right files.

## Custom pages

You can use the `help-page.html` template to create custom pages, like a page about the history of the institution, an acknowledgement page, etc

Then you can link the new pages in the navigation bar.

This template supports:

* Index.
* Headers 1.
* Headers 2.
* Paragraphs.
* Ordered lists.
* Unordered lists.
* Lightbox image galleries.

Every time you create a new custom page, check out that all the links in the HTML files of your OpenProdoc site point to the new file.

## Multi-language support

1. Write a translation file following the template available in `js/langs/en_ES.js`.
2. Uncomment the section below in every HTML file that you want to translate:

```
<!--
<a href="#" id="english" class="ingles">Inglés</a><span id="enTube"> |</span>
<a href="#" id="spanish" class="spanish">Castellano</a><span id="esTube"> |</span>
<a href="#" id="euskera" class="vasco">Euskera</a><span id="euTube"> | </span>
<a href="#" id="galician" class="galego">Gallego</a><span id="gaTube"> | </span>
<a href="#" id="catalan" class="catala">Catalán</a>
-->
```
3. Link to the translation file in the `href` attribute. For example:

```
<a href="/js/langs/en_ES.js" id="spanish" class="spanish">Castellano</a><span id="esTube"> |</span>
```

## Cookies consent message

If you need to display a cookies consent message in your site, just uncomment the section below in every HTML file:

```
<!--
<div class="row cookies" style="display: none;">
  <p>We use <a href="#">cookies</a> </p>
  <img src="img/cross.svg" alt="#" title="#" id="acepto-cookies">
</div>
-->
```

## Screenshots

![OPAC](https://github.com/lucycons3/openprodoc-athena/blob/master/screenshots/demo-opac.png)*OPAC*

![OPAC Results](https://github.com/lucycons3/openprodoc-athena/blob/master/screenshots/demo-opac-results.png)*OPAC Results*

![Help Page](https://github.com/lucycons3/openprodoc-athena/blob/master/screenshots/demo-help-page.png)*Help Page*

![Contribution Login](https://github.com/lucycons3/openprodoc-athena/blob/master/screenshots/demo-contrib-login.png)*Contribution Login*

![Contribution List](https://github.com/lucycons3/openprodoc-athena/blob/master/screenshots/demo-contrib-list.png)*Contribution List*

![Contribution Add](https://github.com/lucycons3/openprodoc-athena/blob/master/screenshots/demo-contrib-add.png)*Contribution Add*

![Contribution Result](https://github.com/lucycons3/openprodoc-athena/blob/master/screenshots/demo-contrib-res.png)*Contribution Result*

## Additional information

This documentation assumes you are already familiar with OpenProdoc administration. Otherwise, you should start by reading the official [OpenProdoc Online Help](https://jhierrot.github.io/openprodoc/help/EN/HelpIndex.html).

Please read the [changelog](https://github.com/lucycons3/openprodoc-athena/tree/master/changelog.md).

If you need any further assistance, don't hesitate to [contact me](mailto:anaamelia@lucycons3.eu).

## Contributors

* Design and development: [Ana Amelia Patiño Esteo](https://github.com/lucycons3).
* OPDCombo2.3.js: [Joaquín Hierro](https://github.com/JHierrot).
* Documentation: [Guillermo Castellano](https://github.com/guillearch).

## Acknowledgements

This project was developed with the support of [Greenpeace Spain](https://es.greenpeace.org/es/).

Thanks to [Marek Grzybek](https://github.com/feimosi/) for the great open-source script [baguetteBox.js](https://github.com/feimosi/baguetteBox.js)!

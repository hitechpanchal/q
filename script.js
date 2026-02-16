const data = [
  {
    id: "tools",
    title: "Tools",
    links: [
      { name: "Router", url: "https://192.168.0.1" },
      { name: "Open-Slum", url: "https://open-slum.org/" },
      { name: "Open Directory Finder", url: "https://expde.github.io/OpenDirectoryFinder/" },
      { name: "Sordum", url: "https://www.sordum.org/" },
      { name: "FMHY(FreeMediaHeckYeah)", url: "https://fmhy.net/" },
      { name: "AlternativeTo", url: "https://alternativeto.net/" },
      { name: "FilePuma", url: "https://filepuma.com" },
    ],
  },
  {
    id: "books",
    title: "Books",
    links: [
      { name: "archiveORG", url: "https://archive.org/" },
      { name: "googlePlayBooks", url: "https://play.google.com/books/ebooks" },
      { name: "MobileRead", url: "https://www.mobileread.com/" },
    ],
  },
  {
    id: "epubEditing",
    title: "EPUB Editing",
    links: [
      { name: "HTML Cleaner", url: "https://html-cleaner.com/" },
      { name: "caseConvertor", url: "https://html-cleaner.com/case-converter/" },
      { name: "sordiumCaseConvertor", url: "https://www.sordum.org/convertcase/" },
      { name: "tableGenerator", url: "https://www.quackit.com/html/html_table_generator.cfm" },
      { name: "urltoHtmlLinks", url: "https://www.textfixer.com/html/convert-url-to-html-link.php" },
    ],
  },
  {
    id: "ebooksWarez",
    title: "eBooksWarez",
    links: [
      { name: "mobilism", url: "http://forum.mobilism.org" },
      { name: "zLibrary", url: "https://1lib.sk/" },
      { name: "Genesis", url: "https://libgen.la/index.php" },
      { name: "Sanet-SoftArchive", url: "https://sanet.st/full" },
      { name: "AudioBook Bay (ABB)", url: "https://audiobookbay.lu/" },
      { name: "WeLib", url: "https://welib.org/" },
      { name: "exForums", url: "https://exforums.com/" },
      { name: "Anna's Archive", url: "https://annas-archive.org/" },
      { name: "ebookBB", url: "https://ebookbb.in/" },
      { name: "eBookHunter", url: "https://ebook-hunter.org/" },
      { name: "OceanofPDF", url: "https://oceanofpdf.com/" },
    ],
  },
  {
    id: "comics",
    title: "Comics",
    links: [
      { name: "Read Comics Online", url: "https://readcomiconline.li/" },
      { name: "Comic Snake", url: "https://comicsnake.com/" },
      { name: "Get Comics", url: "https://getcomics.org/" },
    ],
  },
  {
    id: "learning",
    title: "Learning",
    links: [
      { name: "Udemy", url: "https://www.udemy.com/home/my-courses/" },
      { name: "The Odin Project", url: "https://www.theodinproject.com/dashboard" },
      { name: "soloLearn", url: "https://www.sololearn.com/learn" },
      { name: "CS50x", url: "https://cs50.harvard.edu/x/" },
      { name: "Scrimba", url: "https://scrimba.com/home" },
      { name: "InfySpringBoard", url: "https://infyspringboard.onwingspan.com/web" },
    ],
  },
  {
    id: "cbtWarez",
    title: "CBTWarez",
    links: [
      { name: "downloadlyIR", url: "https://downloadly.ir" },
      { name: "downloadlyNET", url: "https://downloadlynet.ir/" },
      { name: "HacksNation", url: "https://hacksnation.com/" },
      { name: "devCourse", url: "https://devcourseweb.com/tutorials/" },
      { name: "gigaCourse", url: "https://gigacourse.com/?1" },
      { name: "FreeCourseWeb", url: "https://freecourseweb.com/" },
    ],
  },
  {
    id: "graphics",
    title: "Graphics",
    links: [
      { name: "Photopea", url: "https://www.photopea.com/" },
      { name: "Canva", url: "https://www.canva.com/" },
      { name: "watermarkRemover", url: "https://www.watermarkremover.io/upload" },
      { name: "encyColorpedia", url: "https://encycolorpedia.com/" },
      { name: "textEditor", url: "https://texteditor.com" },
    ],
  },
  {
    id: "graphicsCBT",
    title: "GraphicsCBT",
    links: [
      { name: "envatoTut+", url: "https://design.tutsplus.com" },
    ],
  },
  {
    id: "warez",
    title: "Warez",
    links: [
      { name: "rsLoad", url: "https://rsload.net" },
      { name: "LREpacks", url: "https://lrepacks.net/" },
      { name: "fileCR", url: "https://filecr.com/en/" },
      { name: "m0nkrus", url: "https://w17.monkrus.ws/" },
      { name: "uZtracker", url: "https://uztracker.net/index.php" },
      { name: "getIntoPC", url: "https://getintopc.com/" },
    ],
  },
  {
    id: "iraniWarez",
    title: "iraniWarez",
    links: [
      { name: "downloadIR", url: "https://download.ir/" },
      { name: "p30Download", url: "https://p30download.ir/" },
      { name: "soft98", url: "https://soft98.ir/" },
      { name: "downloadHa", url: "https://www.downloadha.com/" },
      { name: "yasDl", url: "https://www.yasdl.com/" },
      { name: "sarazAminDownload", url: "https://www.sarzamindownload.com/" },
      { name: "downloadSoftware", url: "https://www.downloadsoftware.ir/" },
      { name: "patoghu", url: "https://patoghu.com/" },
    ],
  },
  {
    id: "torrentz",
    title: "Torrentz",
    links: [
      { name: "ruTracker", url: "https://rutracker.org/" },
      { name: "1333x", url: "https://1337x.to/" },
      { name: "EXT.TO", url: "https://ext.to/" },
      { name: "RARBG", url: "https://therarbg.com/" },
    ],
  },
  {
    id: "android",
    title: "Android",
    links: [
      { name: "RockBhaskar", url: "https://www.rockmods.net/" },
    ],
  },
  {
    id: "games",
    title: "Games",
    links: [
      { name: "ChessBase", url: "https://play.chessbase.com/en/" },
    ],
  },
  {
    id: "social",
    title: "Social",
    links: [
      { name: "goodReads", url: "https://www.goodreads.com/" },
      { name: "VK", url: "https://vk.com/feed" },
      { name: "Instagram", url: "https://www.instagram.com" },
    ],
  },
  {
    id: "riptools",
    title: "RIPTools",
    links: [
      { name: "Loader", url: "https://en.loader.to/4/" },
      { name: "SpotiDownloader", url: "https://spotidownloader.com/en14" },
      { name: "SpotiDown", url: "https://spotidown.co/" },
    ],
  },
];

function renderSections() {
  const container = document.getElementById("content-container");
  if (!container) return;

  data.forEach((section) => {
    const sectionDiv = document.createElement("div");
    sectionDiv.className = "unit";
    sectionDiv.id = section.id;

    const h3 = document.createElement("h3");
    h3.textContent = section.title;
    sectionDiv.appendChild(h3);

    const flexContainer = document.createElement("div");
    flexContainer.className = "flex-container";

    const ol = document.createElement("ol");

    section.links.forEach((link) => {
      const li = document.createElement("li");
      const a = document.createElement("a");
      a.href = link.url;
      a.target = "_blank";
      a.textContent = link.name;
      li.appendChild(a);
      ol.appendChild(li);
    });

    flexContainer.appendChild(ol);
    sectionDiv.appendChild(flexContainer);
    container.appendChild(sectionDiv);
  });
}

document.addEventListener("DOMContentLoaded", renderSections);

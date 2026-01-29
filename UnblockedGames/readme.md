# Unblockable Games
A truly unblockable 
## How to Play:
1. Download [UBG.zip](./UBG.zip)
2. Copy [URI.txt](./URI.txt) and paste it in your URL bar
3. Import [UBG.zip](./UBG.zip)
## How it works
- Firstly, the main page is a Data URI, meaning it cannot be blocked by extensions such as Securly, and can't be disabled like file://
- Secondly, the games are in a ZIP file, which cannot be blocked (at least not on any normal device)
- Lastly, the games are single-file HTML (Although DOOM does use an external library, JSDOS, but you can't block library imports), and it works by creating a Blob URI from the HTML file and opening it in a new tab.
- Blob URIs are also not blockable because they are temporary URLs that are stored in-memory and stop working the moment the tab that made them is closed
- The reasons I use Blob URIs for the games rather than just Data URIs are:
    - Data URIs are incompatible with many things such as the `fetch()` API, importing libraries via `<script src="..."></script>`, `XMLHttpRequest` API, WEBGL, and more.
    - Data URIs also have a size limit and will simply render a blank page if too big
    - Blobs do not have any of these issues, and, unless you're running a Windows XP workstation with 700KB of RAM, will have no issue loading big files

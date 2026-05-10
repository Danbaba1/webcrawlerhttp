function printReport(pages) {
    console.log("==========");
    console.log("REPORT");
    console.log("==========");
    const sortedPages = sortPages(pages);
    sortedPages.forEach(([url, count]) => {
        console.log(`Found ${count} links to page: ${url}`);
    });
    console.log("==========");
    console.log("END REPORT");
    console.log("==========");
}

function sortPages(pages) {
    const pagesArray = Object.entries(pages);
    pagesArray.sort((a, b) => b[1] - a[1]);
    return pagesArray;
}

module.exports = {
    printReport,
    sortPages
};
let btnscrap = document.getElementById('scrap-profile')

btnscrap.addEventListener('click', async () => {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  if (tab !== null) {
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: scrapingProfile,
    });
  }
})

const scrapingProfile = () => {
  const wait = function (milliseconds) {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve();
      }, milliseconds);
    });
  };

  //EDUCACIÓN
  const elementNameProfile = document.querySelector("#ember44 > div.ph5.pb5 > div.display-flex.justify-space-between.pt2 > div > div:nth-child(1) > h1");
  const elementNameUniversity = document.querySelector("#ember124 > div.pv-entity__summary-info.pv-entity__summary-info--background-section > div > h4.pv-entity__date-range.t-14.t-black--light.t-normal > span:nth-child(2)");
  const elementNameTitle = document.querySelector("#ember131 > div.pv-entity__summary-info.pv-entity__summary-info--background-section > div > h3");

 // const elementNameTitle = document.querySelector("div.ph5.pb5 > div.display-flex.mt2 h2")
  const name = elementNameProfile ? elementNameProfile.innerText : '';
  const univ = elementNameUniversity ? elementNameUniversity : '';
 const title = elementNameTitle ? elementNameTitle.innerText : '';


  console.log({ name, univ, title})
}
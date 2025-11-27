

const scriptsInEvents = {

	async Title_Event1_Act15(runtime, localVars)
	{
		gtag("")
	},

	async Hunterassassin_Event90_Act6(runtime, localVars)
	{

	},

	async Hunterassassin_Event145_Act1(runtime, localVars)
	{
		// window.open("https://amitrkchauhan.github.io/connectLines/", "_blank");
		//StartLineGame();
		
		let iframe = document.createElement("iframe");
		iframe.src = "https://amitrkchauhan.github.io/connectLines/";
		iframe.style.position = "absolute";
		iframe.style.left = "0px";
		iframe.style.top = "0px";
		iframe.style.width = "100%";
		iframe.style.height = "100%";
		iframe.style.zIndex = "9999";
		iframe.style.border = "none";
		document.body.appendChild(iframe);
		
		window.addEventListener("message", onMessageFromIframe, false);
		
		
		  function onMessageFromIframe(event) {
			console.log("onMessageFromIframe =====0000");
			document.querySelector("iframe")?.remove();
		  }
		
	}
};

globalThis.C3.JavaScriptInEvents = scriptsInEvents;

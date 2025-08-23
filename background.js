chrome.runtime.onInstalled.addListener(() => {
    chrome.storage.sync.set({
        blockingEnabled: true
    });
    
    chrome.declarativeNetRequest.updateEnabledRulesets({
        enableRulesetIds: ['ruleset_1']
    });
});

chrome.storage.onChanged.addListener((changes, namespace) => {
    if (namespace === 'sync' && changes.blockingEnabled) {
        const isEnabled = changes.blockingEnabled.newValue;
        
        if (isEnabled) {
            chrome.declarativeNetRequest.updateEnabledRulesets({
                enableRulesetIds: ['ruleset_1']
            });
        } else {
            chrome.declarativeNetRequest.updateEnabledRulesets({
                disableRulesetIds: ['ruleset_1']
            });
        }
    }
});

chrome.webNavigation.onBeforeNavigate.addListener((details) => {
    if (details.frameId === 0) {
        chrome.storage.sync.get(['blockingEnabled'], (result) => {
            const isEnabled = result.blockingEnabled !== false;
            if (isEnabled && details.url.includes('youtube.com')) {
                chrome.tabs.update(details.tabId, {
                    url: chrome.runtime.getURL('blocked.html')
                });
            }
        });
    }
}, {
    url: [
        {hostContains: 'youtube.com'}
    ]
});

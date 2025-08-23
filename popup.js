document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleBtn');
    
    chrome.storage.sync.get(['blockingEnabled'], function(result) {
        const isEnabled = result.blockingEnabled !== false;
        updateButtonState(isEnabled);
    });
    
    toggleBtn.addEventListener('click', function() {
        chrome.storage.sync.get(['blockingEnabled'], function(result) {
            const currentState = result.blockingEnabled !== false;
            const newState = !currentState;
            
            chrome.storage.sync.set({blockingEnabled: newState}, function() {
                updateButtonState(newState);
                
                if (newState) {
                    enableBlocking();
                } else {
                    disableBlocking();
                }
            });
        });
    });
    
    function updateButtonState(isEnabled) {
        if (isEnabled) {
            toggleBtn.textContent = 'ENABLED';
            toggleBtn.classList.remove('disabled');
        } else {
            toggleBtn.textContent = 'DISABLED';
            toggleBtn.classList.add('disabled');
        }
    }
    
    function enableBlocking() {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            enableRulesetIds: ['ruleset_1']
        });
    }
    
    function disableBlocking() {
        chrome.declarativeNetRequest.updateEnabledRulesets({
            disableRulesetIds: ['ruleset_1']
        });
    }
});

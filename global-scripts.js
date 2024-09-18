// ** FIELD TRACKING - ONLY FIRST FOCUS IN
function trackOnFieldFocus(event) {
    console.log('Field focused');
    var target = event.target;
    // Check if the focused element has a data-track attribute
    if (target.hasAttribute('data-track-name')) {
        // Extract attributes prefixed with "data-track-name"

        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackId = target.getAttribute('data-track-id') || '';
        var trackRef = target.getAttribute('data-track-ref') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackName = target.getAttribute('data-track-name');
        var trackValue = target.getAttribute('data-track-value') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';
        var trackSubcategory = target.getAttribute('data-track-subcategory') || '';
        var trackAmount = target.getAttribute('data-track-amount') || '';
        var trackInstrument = target.getAttribute('data-track-instrument') || '';
        var trackGenre = target.getAttribute('data-track-genre') || '';
        var trackProduct = target.getAttribute('data-track-product') || '';
        var trackDescription = target.getAttribute('data-track-description') || '';

        // Construct event properties object
        var event_properties = {
            Action: 'click',
            Id: trackId,
            Ref: trackRef,
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Value: trackValue,
            Category: trackCategory,
            Subcategory: trackSubcategory,
            Amount: trackAmount,
            Instrument: trackInstrument,
            Genre: trackGenre,
            Product: trackProduct,
            Description: trackDescription,
        };

        // Fire amplitude tracking with 'focus' event type
        event_properties['Domain'] = Domain;
        event_properties['Value'] = 'firstfocusin';
        amp(Feature, event_properties);
    }
}

// Attach focus event listener to all form fields with data-track attribute
document.addEventListener('focusin', function(event) {
    var target = event.target;
    if ((target.tagName === 'INPUT' || target.tagName === 'SELECT') && target.hasAttribute('data-track-name')) {
        trackOnFieldFocus(event);
    }
});


// ** FUNCTION TO TRACK LINK CLICKS
function trackLinkClick(event) {
    var target = event.target;
    if (target.tagName === 'A' && target.hasAttribute('data-track-name')) {
        
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackId = target.getAttribute('data-track-id') || '';
        var trackRef = target.getAttribute('data-track-ref') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackName = target.getAttribute('data-track-name');
        var trackValue = target.getAttribute('data-track-value') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';
        var trackSubcategory = target.getAttribute('data-track-subcategory') || '';
        var trackAmount = target.getAttribute('data-track-amount') || '';
        var trackInstrument = target.getAttribute('data-track-instrument') || '';
        var trackGenre = target.getAttribute('data-track-genre') || '';
        var trackProduct = target.getAttribute('data-track-product') || '';
        var trackDescription = target.getAttribute('data-track-description') || '';

        // Construct event properties object
        var event_properties = {
            Action: 'click',
            Id: trackId,
            Ref: trackRef,
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Value: trackValue,
            Category: trackCategory,
            Subcategory: trackSubcategory,
            Amount: trackAmount,
            Instrument: trackInstrument,
            Genre: trackGenre,
            Product: trackProduct,
            Description: trackDescription,
        };

        // Fire amplitude tracking with 'click' event type
        event_properties['Domain'] = Domain;
        amp(Feature, event_properties);
    }
}

// Attach click event listener to all links with data-track-name attribute
var links = document.querySelectorAll('a[data-track-name]');
links.forEach(function(link) {
    link.addEventListener('click', trackLinkClick);
});


// ** FUNCTION TO TRACK BUTTON CLICKS
function trackButtonClick(event) {
    var target = event.target;
    if (target.tagName === 'BUTTON' && target.hasAttribute('data-track-name')) {
        var trackId = target.getAttribute('data-track-id') || '';
        var trackRef = target.getAttribute('data-track-ref') || '';
        var trackContainer = target.getAttribute('data-track-container') || '';
        var trackObject = target.getAttribute('data-track-object') || '';
        var trackName = target.getAttribute('data-track-name');
        var trackValue = target.getAttribute('data-track-value') || '';
        var trackCategory = target.getAttribute('data-track-category') || '';
        var trackSubcategory = target.getAttribute('data-track-subcategory') || '';
        var trackAmount = target.getAttribute('data-track-amount') || '';
        var trackInstrument = target.getAttribute('data-track-instrument') || '';
        var trackGenre = target.getAttribute('data-track-genre') || '';
        var trackProduct = target.getAttribute('data-track-product') || '';
        var trackDescription = target.getAttribute('data-track-description') || '';

        // Construct event properties object
        var event_properties = {
            Action: 'click',
            Id: trackId,
            Ref: trackRef,
            Name: trackName,
            Container: trackContainer,
            Object: trackObject,
            Value: trackValue,
            Category: trackCategory,
            Subcategory: trackSubcategory,
            Amount: trackAmount,
            Instrument: trackInstrument,
            Genre: trackGenre,
            Product: trackProduct,
            Description: trackDescription,
        };

        // Fire amplitude tracking with 'click' event type
        event_properties['Feature'] = Feature;
        event_properties['Domain'] = Domain;
        amp(Feature, event_properties);
    }
}

// Attach click event listener to all buttons with data-track-name attribute
var buttons = document.querySelectorAll('button[data-track-name]');
buttons.forEach(function(button) {
    button.addEventListener('click', trackButtonClick);
});


function amp(event,payload){
    const pathname = window.location.pathname;
    const pathParts = pathname.split('/');
    const pageName = pathParts.pop() || 'index.html'; // Default to 'index.html' if no page name
    const path = pathParts.join('/');

    payload['Title'] = document.title;
    payload['Path'] = path;
    payload['Page Name'] = pageName;
    payload['Query String'] = window.location.search;
    payload['Actual Domain'] = window.location.hostname;
    
    amplitude.track(event, payload);
}

// Global variables
let currentStep = 1;

// Functions
function nextStep(step) {
    updateStep(step, step + 1);
}

function prevStep(step) {
    updateStep(step, step - 1);
}

function updateStep(currentStep, nextStep) {
    document.getElementById(`step-${currentStep}`).classList.remove('active');
    document.getElementById(`step-${nextStep}`).classList.add('active');
    updateProgressBar(nextStep);

    // Tracking
    const event_properties = {
        'Id': 'register',
        'Action': 'displayed',
        'Id': 'step ' + nextStep,
        'Domain': Domain
    };
    amplitude.track('Registration', event_properties);
}




function updateProgressBar(step) {
    const progressBarInner = document.querySelector('.progress-bar-inner');
    const fillPercentage = Math.min((step - 1) / 4 * 100, 100);
    progressBarInner.style.width = `${fillPercentage}%`;
}

function submitForm() {
    const event_properties = {};

    // Simulate form submission outcome
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    if (randomNumber < 34) {
        event_properties.Outcome = 'failure';
        const errors = ['Duplicate_Account', 'System_Unavailable', 'Fraud', 'Network_Issue'];
        const randomErrorIndex = Math.floor(Math.random() * errors.length);
        event_properties.Error = errors[randomErrorIndex];
        alert('Registration Failure');
    } else {
        event_properties.Outcome = 'success';
        const statuses = ['verified', 'unverified'];
        const randomStatusIndex = Math.floor(Math.random() * statuses.length);
        event_properties.Status = statuses[randomStatusIndex];
        alert('Registration Success');
    }

    // Tracking
    
    event_properties['Domain'] = Domain;
    event_properties['Action'] = 'outcome';
    event_properties['Name'] = 'Account';
    event_properties['Method'] = 'Backend';
    amplitude.track('Registration', event_properties);

    // Redirect
    // window.location.href = "confirmation.html" + window.location.search;
}

function redirectTo(url) {
    window.location.href = url + window.location.search;
}
 

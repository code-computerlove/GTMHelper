
import { closest } from './helpers';

let config = {
	category: 'data-ga-category',
	action: 'data-ga-action',
	label: 'data-ga-label',
};

export function ConfigChange(options) {
	config = { ...options };
}

export function sendPromoEvent(event, eventType, events) {
  const dataLayerEvent = {
    event,
    ecommerce: {}
	};

	const eventData = {
		name: '',
		position: '',
		creative: '',
		...events
	};

  dataLayerEvent.ecommerce[eventType] = {
    promotions: [ eventData ]
  };

  dataLayer.push(dataLayerEvent);
}

function checkForAction({ target, currentTarget } = {}) {
	let element = target;

	if (!element.hasAttribute('data-ga-action')) {
		element = closest(element, '[data-ga-action]');
	}

	if (element === null) return;

	const name = currentTarget.getAttribute('data-ga-category') || '';
	const position = element.getAttribute('data-ga-action') || '';
	const creative = element.getAttribute('data-ga-label') || ''

	sendPromoEvent('promotionClick', 'promoClick', { name, position, creative });
}

// Event to track click events on a component

export function TrackClickEvents() {
	const components = [].slice.call(document.querySelectorAll(`[${config.category}]`));
	components.forEach(component => component.addEventListener('click', checkForAction, true));
}

function checkIfInMiddleOfWindow(entry) {
	if (entry.intersectionRatio >= 0.50) {
		const name = entry.target.getAttribute(config.category);

		sendPromoEvent('promotionView', 'promoView', { name });

		observer.unobserve(entry.target);
	}
}

function observerCallback(entries) {
	entries.forEach(checkIfInMiddleOfWindow);
}

// checks if the component is in the middle of the view

export function TrackComponentsInView() {
	const observerConfig = {
		threshold: [0.50]
	};

	const observer = new IntersectionObserver(observerCallback, observerConfig);

	const components = [].slice.call(document.querySelectorAll(`[${config.category}]`));

	components.forEach(element => observer.observe(element));
}

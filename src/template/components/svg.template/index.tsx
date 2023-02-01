import * as React from 'react';

class SVGIconClass {
	// menu-template
	public OrderMenuIcon = require("../img/svg/login/pw-hide-icon.svg").default
}

export const SVGIcon = new SVGIconClass() as {
	[key in keyof SVGIconClass]: React.FC<React.SVGProps<React.ReactSVGElement>>
};
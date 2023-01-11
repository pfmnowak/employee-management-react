import { PaletteColorOptions } from '@mui/material/styles';
/* eslint-disable @typescript-eslint/consistent-type-definitions */

declare module '@mui/material/styles' {
	interface Palette {
		tertiary: PaletteColorOptions;
	}

	interface PaletteOptions {
		tertiary: PaletteColorOptions;
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsColorOverrides {
		tertiary: true;
	}
}
declare module '@mui/material/AppBar' {
	interface AppBarPropsColorOverrides {
		tertiary: true;
	}
}
declare module '@mui/material/Box' {
	interface BoxPropsColorOverrides {
		tertiary: true;
	}
}

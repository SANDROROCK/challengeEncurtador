import { EncurtadorLinks } from './../model/encurtadorLinks.model';


export const encurtadorProviders = [
  {
    provide: 'ENCURTADOR_REPOSITORY',
    useValue: EncurtadorLinks,
  },
];
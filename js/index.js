import {DNDBullet, DNDCard} from './components/dndCard.js'
import {ServiceCard} from './components/serviceCard.js'
import {RuleCard} from './components/ruleCard.js'
import {DBCard} from './components/dbCard.js'
import { FacultyCard } from './components/facultyCard.js';
import { DetailsCard } from './components/detailsCard.js';

customElements.define('dnd-bullet', DNDBullet);
customElements.define('dnd-card', DNDCard);
customElements.define('service-card', ServiceCard);
customElements.define('rule-card', RuleCard);
customElements.define('db-card', DBCard)
customElements.define('faculty-card', FacultyCard);
customElements.define('details-card', DetailsCard);
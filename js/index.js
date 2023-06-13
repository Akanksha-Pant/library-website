import {DNDBullet, DNDCard} from './components/dndCard.js'
import {ServiceCard} from './components/serviceCard.js'
import {RuleCard} from './components/ruleCard.js'
import {DBCard} from './components/dbCard.js'

customElements.define('dnd-bullet', DNDBullet);
customElements.define('dnd-card', DNDCard);
customElements.define('service-card', ServiceCard);
customElements.define('rule-card', RuleCard);
customElements.define('db-card', DBCard)
import { Component } from '@angular/core';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {
  public content: any[] = [
    { description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quas maiores libero, vitae odit tenetur itaque autem nihil quasi dolores,
      eius architecto debitis minima vel? Nostrum dolore modi ex dolorum.`
    },
    { description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quas maiores libero, vitae odit tenetur itaque autem nihil quasi dolores,
      eius architecto debitis minima vel? Nostrum dolore modi ex dolorum.`
    },
    { description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quas maiores libero, vitae odit tenetur itaque autem nihil quasi dolores,
      eius architecto debitis minima vel? Nostrum dolore modi ex dolorum.`
    },
    { description: `Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quas maiores libero, vitae odit tenetur itaque autem nihil quasi dolores,
      eius architecto debitis minima vel? Nostrum dolore modi ex dolorum.`
    },

  ];
}

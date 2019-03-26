import Component from '@glimmer/component';

// Gotcha from Discord
// Mike N: in alpha.4, I'm seeing issues where tracked works fine when imported from @glimmer/tracking,
// but fails when imported from @glimmer/component
import { tracked } from '@glimmer/tracking';

export default class RentalListingComponent extends Component {
  @tracked isWide = false;

  toggleImageSize() {
    this.isWide = !this.isWide;
  }
}

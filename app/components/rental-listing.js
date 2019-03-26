import Component, { tracked } from '@glimmer/component';

export default class RentalListingComponent extends Component {
  // @tracked
  @tracked isWide = false;

  toggleImageSize() {
    this.isWide = !this.isWide;
  }
}

import { defineComponent } from './vendor/vue.esm-browser.js';
import UiAlert from './UiAlert.js';
import UiContainer from './UiContainer.js';

import MeetupDescription from '../02-MeetupDescription/MeetupDescription.js';
import MeetupCover from '../03-MeetupCover/MeetupCover.js';
import MeetupInfo from '../04-MeetupInfo/MeetupInfo.js';
import MeetupAgenda from '../05-MeetupAgenda/MeetupAgenda.js';
import MeetupAgendaItem from '../05-MeetupAgenda/MeetupAgendaItem.js';

export default defineComponent({
  name: 'MeetupView',

  components: {
    UiAlert,
    UiContainer,
    MeetupCover,
    MeetupDescription,
    MeetupInfo,
    MeetupAgenda,
    MeetupAgendaItem
  },

  props: {
    meetup: {
      type: Object,
      required: true,
    },
  },

  template: `
    <div>
    <MeetupCover :title="meetup.title" :image="meetup.image" />

      <ui-container>
        <div class="meetup">
          <div class="meetup__content">
            <h3>Описание</h3>
            <MeetupDescription :description="meetup.description" />
              <h3>Программа</h3>
              <MeetupAgenda v-if="meetup.agenda?.length > 0" :agenda="meetup.agenda" />
              <ui-alert v-else>Программа пока пуста...</ui-alert>
          </div>
          <div class="meetup__aside">
            <MeetupInfo :organizer="meetup.organizer" :place="meetup.place" :date="meetup.date" />
          </div>
        </div>
      </ui-container>
    </div>
    `,
});

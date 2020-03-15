import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { UserService } from 'src/_services/user.service';
import { AuthService } from 'src/_services/auth.service';
import { HomeComponent } from './home/home.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseService } from 'src/_services/course.service';
import { CourseComponent } from './course/course.component';
import { ContactComponent } from './contact/contact.component';
import { AdminNavbarComponent } from './admin-navbar/admin-navbar.component';
import { AdminComponent } from './admin/admin.component';
import { AdminSemilleroMsgComponent } from './admin-semillero-msg/admin-semillero-msg.component';
import { MessageService } from 'src/_services/message.service';
import { AdminSemilleroCoursesComponent } from './admin-semillero-courses/admin-semillero-courses.component';
import { CourseFormComponent } from './admin-semillero-courses/course-form/course-form.component';
import { CourseInfoComponent } from './admin-semillero-courses/course-info/course-info.component';
import { CourseSharedService } from 'src/_services/course.shared.service';
import { AdminSemilleroEventsComponent } from './admin-semillero-events/admin-semillero-events.component';
import { EventService } from 'src/_services/event.service';
import { EventFormComponent } from './admin-semillero-events/event-form/event-form.component';
import { EventSharedService } from 'src/_services/event.shared.service';
import { EventInfoComponent } from './admin-semillero-events/event-info/event-info.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './event/event.component';
import { DateHelper } from 'src/_helpers/date.helper';
import { AdminResourcesCategoriesComponent } from './admin-resources-categories/admin-resources-categories.component';
import { CategoryFormComponent } from './admin-resources-categories/category-form/category-form.component';
import { CategoryInfoComponent } from './admin-resources-categories/category-info/category-info.component';
import { ResourcesComponent } from './resources/resources.component';
import { MainComponent } from './main/main.component';
import { AdminResourcesComponent } from './admin-resources/admin-resources.component';
import { ResourceFormComponent } from './admin-resources/resource-form/resource-form.component';
import { ResourceInfoComponent } from './admin-resources/resource-info/resource-info.component';
import { NewsComponent } from './news/news.component';
import { NewsService } from 'src/_services/news.service';
import { AdminSemilleroNewsComponent } from './admin-semillero-news/admin-semillero-news.component';
import { NewsFormComponent } from './admin-semillero-news/news-form/news-form.component';
import { NewsSharedService } from 'src/_services/news.shared.service';
import { NewsInfoComponent } from './admin-semillero-news/news-info/news-info.component';
import { AdminMembersPendingComponent } from './admin-members-pending/admin-members-pending.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    NavBarComponent,
    CoursesComponent,
    CourseComponent,
    ContactComponent,
    AdminNavbarComponent,
    AdminComponent,
    AdminSemilleroMsgComponent,
    AdminSemilleroCoursesComponent,
    CourseFormComponent,
    CourseInfoComponent,
    AdminSemilleroEventsComponent,
    EventFormComponent,
    EventInfoComponent,
    EventsComponent,
    EventComponent,
    AdminResourcesCategoriesComponent,
    CategoryFormComponent,
    CategoryInfoComponent,
    ResourcesComponent,
    MainComponent,
    AdminResourcesComponent,
    ResourceFormComponent,
    ResourceInfoComponent,
    NewsComponent,
    AdminSemilleroNewsComponent,
    NewsFormComponent,
    NewsInfoComponent,
    AdminMembersPendingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    UserService,
    AuthService,
    CourseService,
    MessageService,
    CourseSharedService,
    EventService,
    EventSharedService,
    DateHelper,
    NewsService,
    NewsSharedService
  ],
  bootstrap: [AppComponent],
  entryComponents: [
    NewsInfoComponent,
    NewsFormComponent,
    CourseFormComponent,
    CourseInfoComponent,
    EventFormComponent,
    EventInfoComponent,
    EventComponent,
    CategoryFormComponent,
    CategoryInfoComponent,
    ResourceFormComponent,
    ResourceInfoComponent,
    CourseComponent
  ]
})
export class AppModule { }

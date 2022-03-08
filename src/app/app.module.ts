import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NaviComponent } from './navi/navi.component';
import { BillboardComponent } from './billboard/billboard.component';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { CourseComponent } from './course/course.component';
import { CategoryComponent } from './category/category.component';
import { TopicComponent } from './topic/topic.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NaviComponent,
    BillboardComponent,
    TabBarComponent,
    CourseComponent,
    CategoryComponent,
    TopicComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

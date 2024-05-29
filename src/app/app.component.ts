import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { GuardsCheckEnd, GuardsCheckStart, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, ResolveEnd, ResolveStart, RouteConfigLoadEnd, RouteConfigLoadStart, Router, RoutesRecognized, Scroll } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent
//  implements OnInit,OnChanges,DoCheck,AfterContentInit,
// AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy 
{
  title = 'A3trip';

  constructor(private router:Router) {
    router.events.subscribe((events)=>{
      if (events instanceof NavigationStart) {
        console.log('Navigation started:', events);
      }  if(events instanceof RouteConfigLoadStart) {
        console.log('Route config load started:', events);
      }  if (events instanceof RouteConfigLoadEnd) {
        console.log('Route config load ended:', events);
      }if (events instanceof RoutesRecognized) {
        console.log('Routes recognized:', events);
      } if (events instanceof GuardsCheckStart) {
        console.log('Guards check started:', events);
      }if (events instanceof GuardsCheckEnd) {
        console.log('Guards check ended:', events);
      }if (events instanceof ResolveStart) {
        console.log('Resolve started:', events);
      }if (events instanceof ResolveEnd) {
        console.log('Resolve ended:', events);
      }if (events instanceof NavigationEnd) {
        console.log('Navigation ended:', events);
      } if (events instanceof NavigationCancel) {
        console.log('Navigation canceled:', events);
      } if (events instanceof NavigationError) {
        console.error('Navigation error:', events);
      }if (events instanceof Scroll) {
        console.log('Scroll event:', events);
      }
    })
  }



  
  // constructor()
  // {
  //   console.log('constructor call')
  // }
  
  
 
  // ngOnChanges(changes: SimpleChanges){
  //     console.log('ngOnChanges call')
  //     // console.log(changes['inputValue'].currentValue)
  //     // console.log(changes['inputValue'].previousValue)
  // }
  
  
  //   ngOnInit(): void {
  //        console.log('ngOnInit call')
  //   }
  
  //   ngDoCheck(): void {
  //       console.log('DoCheck call')
  //   }
  
  //   ngAfterContentInit(): void {
  //     console.log('ngAfterContentInit call')
  //   }
  
  //   ngAfterContentChecked(): void {
  //       console.log('ngAfterContentCheck call')
  //   }
  
  //   ngAfterViewInit(): void {
  //       console.log('ngAfterViewInit call')
  //   }
  //  ngAfterViewChecked(): void {
  //      console.log('ngAfterViewChecked call')
  //  }
  
  //  ngOnDestroy(): void {
  //   console.log('ngOnDestory call')   
  //  }
}

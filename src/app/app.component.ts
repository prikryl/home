import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {tap} from "rxjs/operators";
import {ShutterConfig, ShutterService} from "./shutter.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public shutterConfigs: ShutterConfig[] = [];

  constructor(
    private cd: ChangeDetectorRef,
    private shutterService: ShutterService,
  ) {
  }

  ngOnInit(): void {
    this.shutterService.getShutterConfigs().pipe(
      tap((s) => this.shutterConfigs = s),
      tap(() => this.cd.markForCheck()),
    ).subscribe();
  }
}

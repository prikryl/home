import {Component, Input} from '@angular/core';
import {ShutterConfig, ShutterService} from "../shutter.service";

@Component({
  selector: 'app-shutter-ctrl',
  templateUrl: './shutter-ctrl.component.html',
  styleUrls: ['./shutter-ctrl.component.scss']
})
export class ShutterCtrlComponent {

  @Input()
  public shutterConfig: ShutterConfig = {code: 'defaultCode', name: 'defaultName'};

  constructor(
    private shutterService: ShutterService,
  ) {
  }


  public up():void {
    this.shutterService.execute(this.shutterConfig.code, 'up').subscribe();
  }
  public stop():void {
    this.shutterService.execute(this.shutterConfig.code, 'stop').subscribe();
  }
  public down():void {
    this.shutterService.execute(this.shutterConfig.code, 'down').subscribe();
  }
}

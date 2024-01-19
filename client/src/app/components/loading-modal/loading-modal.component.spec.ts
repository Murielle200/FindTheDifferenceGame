import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatSpinnerStub } from '@app/stubs/mat-spinner.component.stub';
import { LoadingModalComponent } from './loading-modal.component';

describe('LoadingModalComponent', () => {
    let component: LoadingModalComponent;
    let fixture: ComponentFixture<LoadingModalComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [LoadingModalComponent, MatSpinnerStub],
        }).compileComponents();

        fixture = TestBed.createComponent(LoadingModalComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});

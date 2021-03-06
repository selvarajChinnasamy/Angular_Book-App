"use strict";
/**
 * @fileoverview This file is generated by the Angular template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
 */
/* tslint:disable */
Object.defineProperty(exports, "__esModule", { value: true });
var i0 = require("./register.component.css.shim.ngstyle");
var i1 = require("@angular/core");
var i2 = require("../../../../../src/app/register/register.component");
var i3 = require("@angular/forms");
var i4 = require("@angular/common");
var i5 = require("@angular/router");
var i6 = require("../../../../../src/app/data.service");
var styles_RegisterComponent = [i0.styles];
exports.RenderType_RegisterComponent = i1.ɵcrt({ encapsulation: 0,
    styles: styles_RegisterComponent, data: {} });
function View_RegisterComponent_1(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'alert']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.titleAlert;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_RegisterComponent_2(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'alert']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['', '']))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.titleAlert;
        _ck(_v, 1, 0, currVal_0);
    });
}
function View_RegisterComponent_3(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'div', [['class',
                'alert']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['You must specify a description that\'s between 8 characters.']))], null, null);
}
function View_RegisterComponent_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 71, 'div', [['class',
                'main']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 68, 'div', [['class', 'login-page']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n    '])),
        (_l()(), i1.ɵeld(0, null, null, 65, 'div', [['class', 'form']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n      '])), (_l()(), i1.ɵeld(0, null, null, 62, 'form', [['novalidate',
                '']], [[2, 'ng-untouched', null], [2, 'ng-touched', null], [2,
                'ng-pristine', null], [2, 'ng-dirty', null], [2, 'ng-valid',
                null], [2, 'ng-invalid', null], [2, 'ng-pending', null]], [[null, 'ngSubmit'], [null, 'submit'], [null, 'reset']], function (_v, en, $event) {
            var ad = true;
            var _co = _v.component;
            if (('submit' === en)) {
                var pd_0 = (i1.ɵnov(_v, 8).onSubmit($event) !== false);
                ad = (pd_0 && ad);
            }
            if (('reset' === en)) {
                var pd_1 = (i1.ɵnov(_v, 8).onReset() !== false);
                ad = (pd_1 && ad);
            }
            if (('ngSubmit' === en)) {
                var pd_2 = (_co.addPost(_co.rForm.value) !== false);
                ad = (pd_2 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.ɵbf, [], null, null), i1.ɵdid(540672, null, 0, i3.FormGroupDirective, [[8, null], [8, null]], { form: [0, 'form'] }, { ngSubmit: 'ngSubmit' }),
        i1.ɵprd(2048, null, i3.ControlContainer, null, [i3.FormGroupDirective]),
        i1.ɵdid(16384, null, 0, i3.NgControlStatusGroup, [i3.ControlContainer], null, null), (_l()(), i1.ɵted(null, ['\n          '])),
        (_l()(), i1.ɵeld(0, null, null, 11, 'div', [['class', 'input-group']], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)), (_l()(), i1.ɵted(null, [' Name '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['formControlName',
                'name'], ['style', 'width:110%'], ['type', 'text']], [[2, 'ng-untouched', null],
            [2, 'ng-touched', null], [2, 'ng-pristine', null], [2, 'ng-dirty',
                null], [2, 'ng-valid', null], [2, 'ng-invalid', null],
            [2, 'ng-pending', null]], [[null, 'input'], [null,
                'blur'], [null, 'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 18)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 18).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 18)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 18)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RegisterComponent_1)), i1.ɵdid(16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 11, 'div', [['class', 'input-group']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, ['User_Name '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['formControlName',
                'username'], ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 34)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 34).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 34)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 34)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RegisterComponent_2)), i1.ɵdid(16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 11, 'div', [['class', 'input-group']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['\n  '])), (_l()(), i1.ɵeld(0, null, null, 1, 'label', [], null, null, null, null, null)),
        (_l()(), i1.ɵted(null, [' Password '])), (_l()(), i1.ɵted(null, ['\n    '])), (_l()(), i1.ɵeld(0, null, null, 5, 'input', [['formControlName',
                'password'], ['type', 'text']], [[2, 'ng-untouched', null], [2, 'ng-touched',
                null], [2, 'ng-pristine', null], [2, 'ng-dirty', null],
            [2, 'ng-valid', null], [2, 'ng-invalid', null], [2, 'ng-pending',
                null]], [[null, 'input'], [null, 'blur'], [null,
                'compositionstart'], [null, 'compositionend']], function (_v, en, $event) {
            var ad = true;
            if (('input' === en)) {
                var pd_0 = (i1.ɵnov(_v, 50)._handleInput($event.target.value) !== false);
                ad = (pd_0 && ad);
            }
            if (('blur' === en)) {
                var pd_1 = (i1.ɵnov(_v, 50).onTouched() !== false);
                ad = (pd_1 && ad);
            }
            if (('compositionstart' === en)) {
                var pd_2 = (i1.ɵnov(_v, 50)._compositionStart() !== false);
                ad = (pd_2 && ad);
            }
            if (('compositionend' === en)) {
                var pd_3 = (i1.ɵnov(_v, 50)._compositionEnd($event.target.value) !== false);
                ad = (pd_3 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(16384, null, 0, i3.DefaultValueAccessor, [i1.Renderer2, i1.ElementRef, [2, i3.COMPOSITION_BUFFER_MODE]], null, null), i1.ɵprd(1024, null, i3.NG_VALUE_ACCESSOR, function (p0_0) {
            return [p0_0];
        }, [i3.DefaultValueAccessor]), i1.ɵdid(671744, null, 0, i3.FormControlName, [[3, i3.ControlContainer], [8, null], [8, null], [2, i3.NG_VALUE_ACCESSOR]], { name: [0, 'name'] }, null), i1.ɵprd(2048, null, i3.NgControl, null, [i3.FormControlName]), i1.ɵdid(16384, null, 0, i3.NgControlStatus, [i3.NgControl], null, null), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['    \n'])), (_l()(), i1.ɵand(16777216, null, null, 1, null, View_RegisterComponent_3)), i1.ɵdid(16384, null, 0, i4.NgIf, [i1.ViewContainerRef, i1.TemplateRef], { ngIf: [0, 'ngIf'] }, null), (_l()(), i1.ɵted(null, ['\n\n'])), (_l()(), i1.ɵeld(0, null, null, 2, 'div', [['class', 'navbar-brand']], null, null, null, null, null)), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-warning'], ['type',
                'submit']], [[8, 'disabled', 0]], null, null, null, null)), (_l()(), i1.ɵted(null, ['Register'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵeld(0, null, null, 3, 'a', [['class', 'navbar-brand'],
            ['routerLink', '/']], [[1, 'target', 0], [8, 'href', 4]], [[null, 'click']], function (_v, en, $event) {
            var ad = true;
            if (('click' === en)) {
                var pd_0 = (i1.ɵnov(_v, 65).onClick($event.button, $event.ctrlKey, $event.metaKey, $event.shiftKey) !== false);
                ad = (pd_0 && ad);
            }
            return ad;
        }, null, null)), i1.ɵdid(671744, null, 0, i5.RouterLinkWithHref, [i5.Router, i5.ActivatedRoute, i4.LocationStrategy], { routerLink: [0, 'routerLink'] }, null), (_l()(), i1.ɵeld(0, null, null, 1, 'button', [['class', 'btn btn-primary'], ['type', 'button']], null, null, null, null, null)), (_l()(), i1.ɵted(null, ['Login'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n'])), (_l()(), i1.ɵted(null, ['\n']))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_7 = _co.rForm;
        _ck(_v, 8, 0, currVal_7);
        var currVal_15 = 'name';
        _ck(_v, 20, 0, currVal_15);
        var currVal_16 = (!_co.rForm.controls['name'].valid && _co.rForm.controls['name'].touched);
        _ck(_v, 26, 0, currVal_16);
        var currVal_24 = 'username';
        _ck(_v, 36, 0, currVal_24);
        var currVal_25 = (!_co.rForm.controls['username'].valid && _co.rForm.controls['username'].touched);
        _ck(_v, 42, 0, currVal_25);
        var currVal_33 = 'password';
        _ck(_v, 52, 0, currVal_33);
        var currVal_34 = (!_co.rForm.controls['password'].valid && _co.rForm.controls['password'].touched);
        _ck(_v, 58, 0, currVal_34);
        var currVal_38 = '/';
        _ck(_v, 65, 0, currVal_38);
    }, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = i1.ɵnov(_v, 10).ngClassUntouched;
        var currVal_1 = i1.ɵnov(_v, 10).ngClassTouched;
        var currVal_2 = i1.ɵnov(_v, 10).ngClassPristine;
        var currVal_3 = i1.ɵnov(_v, 10).ngClassDirty;
        var currVal_4 = i1.ɵnov(_v, 10).ngClassValid;
        var currVal_5 = i1.ɵnov(_v, 10).ngClassInvalid;
        var currVal_6 = i1.ɵnov(_v, 10).ngClassPending;
        _ck(_v, 6, 0, currVal_0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6);
        var currVal_8 = i1.ɵnov(_v, 22).ngClassUntouched;
        var currVal_9 = i1.ɵnov(_v, 22).ngClassTouched;
        var currVal_10 = i1.ɵnov(_v, 22).ngClassPristine;
        var currVal_11 = i1.ɵnov(_v, 22).ngClassDirty;
        var currVal_12 = i1.ɵnov(_v, 22).ngClassValid;
        var currVal_13 = i1.ɵnov(_v, 22).ngClassInvalid;
        var currVal_14 = i1.ɵnov(_v, 22).ngClassPending;
        _ck(_v, 17, 0, currVal_8, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14);
        var currVal_17 = i1.ɵnov(_v, 38).ngClassUntouched;
        var currVal_18 = i1.ɵnov(_v, 38).ngClassTouched;
        var currVal_19 = i1.ɵnov(_v, 38).ngClassPristine;
        var currVal_20 = i1.ɵnov(_v, 38).ngClassDirty;
        var currVal_21 = i1.ɵnov(_v, 38).ngClassValid;
        var currVal_22 = i1.ɵnov(_v, 38).ngClassInvalid;
        var currVal_23 = i1.ɵnov(_v, 38).ngClassPending;
        _ck(_v, 33, 0, currVal_17, currVal_18, currVal_19, currVal_20, currVal_21, currVal_22, currVal_23);
        var currVal_26 = i1.ɵnov(_v, 54).ngClassUntouched;
        var currVal_27 = i1.ɵnov(_v, 54).ngClassTouched;
        var currVal_28 = i1.ɵnov(_v, 54).ngClassPristine;
        var currVal_29 = i1.ɵnov(_v, 54).ngClassDirty;
        var currVal_30 = i1.ɵnov(_v, 54).ngClassValid;
        var currVal_31 = i1.ɵnov(_v, 54).ngClassInvalid;
        var currVal_32 = i1.ɵnov(_v, 54).ngClassPending;
        _ck(_v, 49, 0, currVal_26, currVal_27, currVal_28, currVal_29, currVal_30, currVal_31, currVal_32);
        var currVal_35 = !_co.rForm.valid;
        _ck(_v, 61, 0, currVal_35);
        var currVal_36 = i1.ɵnov(_v, 65).target;
        var currVal_37 = i1.ɵnov(_v, 65).href;
        _ck(_v, 64, 0, currVal_36, currVal_37);
    });
}
exports.View_RegisterComponent_0 = View_RegisterComponent_0;
function View_RegisterComponent_Host_0(_l) {
    return i1.ɵvid(0, [(_l()(), i1.ɵeld(0, null, null, 1, 'app-register', [], null, null, null, View_RegisterComponent_0, exports.RenderType_RegisterComponent)), i1.ɵdid(114688, null, 0, i2.RegisterComponent, [i3.FormBuilder, i6.DataService], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
    }, null);
}
exports.View_RegisterComponent_Host_0 = View_RegisterComponent_Host_0;
exports.RegisterComponentNgFactory = i1.ɵccf('app-register', i2.RegisterComponent, View_RegisterComponent_Host_0, {}, {}, []);
//# sourceMappingURL=register.component.ngfactory.js.map
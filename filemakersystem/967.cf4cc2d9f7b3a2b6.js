"use strict";(self.webpackChunkfilemakersystem=self.webpackChunkfilemakersystem||[]).push([[967],{5967:(x,m,e)=>{e.r(m),e.d(m,{ForgetPasswordModule:()=>Z});var d=e(4666),i=e(2508),c=e(2607),t=e(2560),g=e(6518),n=e(5465),u=e(4817),f=e(4497),h=e(3927);function v(r,l){1&r&&(t.TgZ(0,"small",17),t._uU(1," Please enter valid email address "),t.qZA())}function p(r,l){1&r&&(t.TgZ(0,"small",17),t._uU(1," Please enter your email address. "),t.qZA())}function w(r,l){if(1&r){const o=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"h2"),t._uU(4,"Forgot Password"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"Enter your registered email and we will send you a OTP."),t.qZA(),t.TgZ(7,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.forgetPasswordFormSubmit())}),t.TgZ(8,"div",9)(9,"label",10),t._uU(10,"Email:"),t.qZA(),t._UZ(11,"input",11),t.YNc(12,v,2,0,"small",12),t.YNc(13,p,2,0,"small",12),t.qZA(),t.TgZ(14,"div",13)(15,"button",14),t._uU(16,"Send OTP"),t.qZA()(),t.TgZ(17,"div",15)(18,"span"),t._uU(19,"Already have an account? "),t.qZA(),t.TgZ(20,"a",16),t._uU(21,"Login"),t.qZA()()()()()()}if(2&r){const o=t.oxw();t.xp6(7),t.Q6J("formGroup",o.forgetPasswordForm),t.xp6(4),t.ekj("is-invalid",o.forgetPasswordForm.controls.email.invalid&&o.forgetPasswordForm.controls.email.touched)("is-valid",!o.forgetPasswordForm.controls.email.hasError("pattern")&&o.forgetPasswordForm.controls.email.valid&&o.forgetPasswordForm.controls.email.touched),t.xp6(1),t.Q6J("ngIf",o.forgetPasswordForm.controls.email.hasError("pattern")&&o.forgetPasswordForm.controls.email.dirty),t.xp6(1),t.Q6J("ngIf",o.forgetPasswordForm.controls.email.touched&&o.forgetPasswordForm.controls.email.hasError("required"))}}function P(r,l){if(1&r){const o=t.EpF();t.TgZ(0,"div",5)(1,"div",6)(2,"div",7)(3,"h2"),t._uU(4,"Verify Account"),t.qZA(),t.TgZ(5,"p"),t._uU(6,"We will send you a verification link on your email, Please verify your account."),t.qZA(),t.TgZ(7,"form",8),t.NdJ("ngSubmit",function(){t.CHM(o);const a=t.oxw();return t.KtG(a.sendVerifiactionLink())}),t.TgZ(8,"div",13)(9,"button",14),t._uU(10,"Send Email"),t.qZA()(),t.TgZ(11,"div",15)(12,"span"),t._uU(13,"Already have an account? "),t.qZA(),t.TgZ(14,"a",16),t._uU(15,"Login"),t.qZA()()()()()()}if(2&r){const o=t.oxw();t.xp6(7),t.Q6J("formGroup",o.forgetPasswordForm)}}const F=[{path:"",component:(()=>{class r{constructor(o,s,a,T,b,A){this.fb=o,this.authservice=s,this.router=a,this.toastr=T,this._titleservice=b,this.crud=A,this.tab="forgetPassword",this._titleservice.setTitle("Forgot Password | Viezu"),this.forgetPasswordForm=this.fb.group({email:["",[i.kI.required,i.kI.email]]})}ngOnInit(){}forgetPasswordFormSubmit(){this.forgetPasswordForm.valid?this.authservice.forgotPassword(this.forgetPasswordForm.value).subscribe(o=>{o&&(o.resend_mail?(this.toastr.error(o.message),this.tab="verifyAccount"):(this.toastr.success(o.message,"",{timeOut:4e3}),this.router.navigate(["/auth/otp",(0,c.y)(this.forgetPasswordForm.value.email)])))},o=>{this.toastr.error(o.error.detail,"",{timeOut:4e3})}):this.markAllControlsAsTouched(this.forgetPasswordForm)}markAllControlsAsTouched(o){Object.values(o.controls).forEach(s=>{s.markAsTouched(),s instanceof i.cw&&this.markAllControlsAsTouched(s)})}sendVerifiactionLink(){this.crud.get(`account/resend-verification-email?email=${this.forgetPasswordForm.value.email}`).subscribe(o=>{o&&(this.toastr.success(o.message),this.router.navigateByUrl("/auth/login"))})}static#t=this.\u0275fac=function(s){return new(s||r)(t.Y36(i.qu),t.Y36(g.e),t.Y36(n.F0),t.Y36(u._W),t.Y36(f.Dx),t.Y36(h.I))};static#o=this.\u0275cmp=t.Xpm({type:r,selectors:[["app-forget-password"]],decls:6,vars:2,consts:[[1,"container-fluid"],[1,"row","inner-box"],[1,"col-sm-5","p-0","mob-left"],["src","assets/images/Forgot-password.webp","alt","",1,"bnrimg"],["class","col-sm-7 mob-right",4,"ngIf"],[1,"col-sm-7","mob-right"],[1,"login-box"],[1,"login-box-inner"],[3,"formGroup","ngSubmit"],[1,"f-margins"],["for","email",1,"form-label"],["type","email","formControlName","email","placeholder","Enter email",1,"form-control"],["class","text-danger mt-4",4,"ngIf"],[1,"d-grid"],["type","submit",1,"btn","btn-primary","btn-block","lbtn"],[1,"mt-3","text-center","reg"],["routerLink","/auth/login"],[1,"text-danger","mt-4"]],template:function(s,a){1&s&&(t.TgZ(0,"div",0)(1,"div",1)(2,"div",2),t._UZ(3,"img",3),t.qZA(),t.YNc(4,w,22,7,"div",4),t.YNc(5,P,16,1,"div",4),t.qZA()()),2&s&&(t.xp6(4),t.Q6J("ngIf","forgetPassword"==a.tab),t.xp6(1),t.Q6J("ngIf","verifyAccount"==a.tab))},dependencies:[d.O5,i._Y,i.Fj,i.JJ,i.JL,i.sg,i.u,n.rH],styles:[".align-right[_ngcontent-%COMP%]{text-align:right}"]})}return r})()}];let Z=(()=>{class r{static#t=this.\u0275fac=function(s){return new(s||r)};static#o=this.\u0275mod=t.oAB({type:r});static#r=this.\u0275inj=t.cJS({imports:[d.ez,i.UX,n.Bz.forChild(F)]})}return r})()}}]);
//# sourceMappingURL=967.cf4cc2d9f7b3a2b6.js.map
// $(document).ready(function () {
//     const formStyling = `
// .hbspt-form input[type="text"], .hbspt-form input[type="email"], .hbspt-form input[type="tel"], .hbspt-form select {
//   background: #fff;
//   border: 1px solid #ccd3d6;
//   box-sizing: border-box;
//   border-radius: 7px;
//   height: 50px;
//   width: 100%;
//   padding: 0 18px;
//   font-size: 15px;
//   line-height: 14px;
//   color: #1e4768;
//   max-width: 100% !important;
// }

// .hbspt-form select {
//   appearance: none;
//   -webkit-appearance:none;
// }

// .hs-fieldtype-select {
//   position: relative;
// }

// .hs-fieldtype-select::after {
//   content: '';
//   position: absolute;
//   right: 15px;
//   top: 43px;
//   background: url('https://akeolab.agency/postie/wp-content/uploads/2021/10/Vector-7.svg') center center no-repeat;
//   background-size: contain;
//   width: 10px;
//   height: 12px;
// }

// .hbspt-form input:focus, .hbspt-form select:focus {
//   border-color: #69bc45 !important;
// }
// .field {
//   margin-bottom: 0;
// }
// fieldset {
//   border: none !important;
//   padding-left: 0;
//   padding-right: 0;
//   margin-left: 0;
//   padding-bottom: 22px;
//   padding-top: 0;
// }
// .hs-error-msg {
//   font-size: 14px;
//   line-height: 14px;
//   color: #eb4568;
//   margin-top: 10px;
// }
// .hbspt-form fieldset:first-of-type {
//   display: flex;
//   justify-content: space-between;
// }
// .hs-firstname {
//   width: 48% !important;
// }
// .hs-lastname {
//   width: 48% !important;
// }
// .hs-input.invalid {
//   border: 1px solid #eb4568 !important;
//   position: relative;
//   box-shadow: 0px 0px 10px rgba(235, 69, 104, 0.15);
// }
// .hs-form-booleancheckbox-display {
//   font-size: 14px;
//   line-height: 14px;
//   color: #1e4768;
//   display: flex;
//   align-items: center;
// }
// .hbspt-form label {
//   font-size: 14px !important;
//   line-height: 14px !important;
//   color: #1e4768 !imporant;
//   margin-bottom: 10px;
// }
// .actions {
//   padding-top: 0;
//   margin-top: 0;
// }
// .hs-fieldtype-booleancheckbox {
//   margin-top: -6px;
// }
// .hs-input[type=checkbox] {
//   position: relative;
//   width: 20px;
//   height: 20px;
//   border-radius: 3px;
//   appearance: none;
//   border: 1px solid #ccd3d6;
//   margin-right: 10px;
// }
// .hs-input[type=checkbox]::after {
//   content: "";
//   display: block;
//   position: absolute;
//   width: 12px;
//   height: 12px;
//   left: 50%;
//   top: 50%;
//   transform: translate3D(-50%, -50%, 0) scale(0);
//   background: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1.23828 5.56022L4.03974 8.36168L10.7632 1.63818' stroke='white' stroke-width='2' stroke-linecap='round'/%3E%3C/svg%3E%0A")
//     no-repeat center center / contain;
// }

// .hs-input[type=checkbox]:checked {
//   background: #69bc45 !important;
//   border-color: #69bc45 !important;
// }
// .hs-input[type=checkbox]:checked::after {
//   transform: translate3D(-50%, -50%, 0) scale(1);
// }
// .hs-input.invalid::after {
//   content: "";
//   background: url("../../../icons/svg/error.svg") no-repeat;
//   background-size: contain;
//   width: 17px;
//   height: 17px;
//   position: absolute;
//   right: 15px;
//   top: 41px;
//   display: block;
// }
// .hs-input:not([type=file]) {
//   background-color: transparent !important;
// }

// .hs-form-required {
//   color: #23496d !important;
// }
// .hs-form-field {
//   width: 100%;
//   max-width: 100%;
// }
// .hbspt-form input[type="text"]::placeholder, .hbspt-form input[type="email"]::placeholder, .hbspt-form input[type="tel"]::placeholder, .hbspt-form select::placeholder {
//   font-weight: normal;
//   font-size: 15px;
//   line-height: 14px;
//   color: #bac2c5;
// }
// .hbspt-form select {
//   font-size: 15px;
//   line-height: 14px;
//   padding-right: 18px;
// }
// .hbspt-form select option {
//   color: #1e4768 !important;
//   font-size: 15px;
//   line-height: 14px;
// }
// .hbspt-form input[type="submit"] {
//   border: none;
//   appearance: none;
//   -webkit-appearance: none;
//   background: #69bc45;
//   border-radius: 37px;
//   display: block;
//   width: 271px;
//   height: 48px;
//   cursor: pointer;
//   transition: background-color 0.2s ease(custom, fluid);
// }
// .hbspt-form input[type="submit"]:hover {
//   background-color: getPostieColor("primaryBlueHover");
// }

// @media(max-width: 600px) {
//   .hbspt-form fieldset:first-of-type {
//     display: block;
//   }
//   .hs-firstname {
//     width: 100% !important;
//     padding-bottom: 22px;
//   }
//   .hs-lastname {
//     width: 100% !important;
//   }

//   .hbspt-form input[type="submit"] {
//     width: 100%;
//   }
// }
// `;

//     // eslint-disable-next-line no-undef
//     hbspt.forms.create({
//         region: 'na1',
//         portalId: '20464385',
//         formId: 'c73a2785-a3c7-4520-b563-d02c46ff4485',
//         cssRequired: formStyling
//     });
// });

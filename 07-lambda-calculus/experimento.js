Number.prototype.log = function () {
  console.log(+this);
};

Function.prototype.log = function () {
  console.log(this.toString());
};

let r;

const I = (a) => a;
r = I(3);
r.log();
r = I(I);
r.log();

const SELF = (f) => f(f);
r = SELF(I);
r.log();

const PRI = (a) => (_) => a;

r = PRI(7)(11);
r.log();

const ULT = (_) => (b) => b;

r = ULT(7)(11);

r;

const TRO = (f) => (a) => (b) => f(b)(a);

r = TRO(ULT)(7)(11);
r.log();

r = TRO(PRI)(6)(12);
r.log();

const ULT2 = (a) => (b) => TRO(PRI)(a)(b);
r = ULT2(13)(20);
r.log();

// boolean TRUE e FALSE
// EXP ? PRI : ULT
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI;
const F = ULT;

T.toString = () => 'Verdadeiro (PRI)';
F.toString = () => 'Falso (ULT)';

T;
F;

// NOT
const NOT = (a) => a(F)(T);

r = NOT(T);
r.log();

r = NOT(F);
r.log();

//  AND
//  true && true => true
//  true && false => false
//  false && true => false
//  false && false => false

const AND = (a) => (b) => a(b)(F);

r = AND(F)(T);
r.log();

r = AND(F)(F);
r.log();

r = AND(T)(F);
r.log();

r = AND(T)(T);
r.log();

// OR
const OR = (a) => (b) => a(T)(b);

r = OR(F)(F);
r.log();

r = OR(F)(T);
r.log();

r = OR(T)(F);
r.log();

r = OR(T)(T);
r.log();

// EQUAL
const EQ = (a) => (b) => a(b)(NOT(b));

r = EQ(T)(T);
r.log();

r = EQ(F)(T);
r.log();

r = EQ(T)(F);
r.log();

r = EQ(F)(F);
r.log();

// XOR é a negacao de igualdade
const XOR = (a) => (b) => NOT(EQ(a)(b));

r = XOR(T)(T);
r.log();

r = XOR(F)(T);
r.log();

r = XOR(T)(F);
r.log();

r = XOR(F)(F);
r.log();

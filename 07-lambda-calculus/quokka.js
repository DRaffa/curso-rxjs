// Utilizando do Quokka
let r;

const I = (a) => a;
r = I(3);
r;
r = I(I);
r;

const SELF = (f) => f(f);
r = SELF(I);
r;

const PRI = (a) => (_) => a;

r = PRI(7)(11);
r;

const ULT = (_) => (b) => b;

r = ULT(7)(11);

r;

const TRO = (f) => (a) => (b) => f(b)(a);

r = TRO(ULT)(7)(11);
r;

r = TRO(PRI)(6)(12);
r;

const ULT2 = (a) => (b) => TRO(PRI)(a)(b);
r = ULT2(13)(20);
r;

// boolean TRUE e FALSE
// EXP ? PRI : ULT
// TRUE ? <PRI> : ULT
// FALSE ? PRI : <ULT>

const T = PRI;
const F = ULT;

T.inspect = () => 'Verdadeiro (PRI)';
F.inspect = () => 'Falso (ULT)';

T;
F;

// NOT
const NOT = (a) => a(F)(T);

r = NOT(T);
r;

r = NOT(F);
r;

//  AND
//  true && true => true
//  true && false => false
//  false && true => false
//  false && false => false

const AND = (a) => (b) => a(b)(F);

r = AND(F)(T);
r;

r = AND(F)(F);
r;

r = AND(T)(F);
r;

r = AND(T)(T);
r;

// OR
const OR = (a) => (b) => a(T)(b);

r = OR(F)(F);
r;

r = OR(F)(T);
r;

r = OR(T)(F);
r;

r = OR(T)(T);
r;

// EQUAL
const EQ = (a) => (b) => a(b)(NOT(b));

r = EQ(T)(T);
r;

r = EQ(F)(T);
r;

r = EQ(T)(F);
r;

r = EQ(F)(F);
r;

// XOR é a negacao de igualdade
const XOR = (a) => (b) => NOT(EQ(a)(b));

r = XOR(T)(T);
r;

r = XOR(F)(T);
r;

r = XOR(T)(F);
r;

r = XOR(F)(F);
r;


import { Product } from './models/product.model';
import { CategoryModel } from './models/category.model';

export const admin = [];

export const customer = [];

const divan = [
'../../../assets/images/диван/адисън/адисън.jpg',
'../../../assets/images/диван/андрия/андрия.jpg',
'../../../assets/images/диван/базел/базел.jpg',
'../../../assets/images/диван/венеция/венеция.jpg',
'../../../assets/images/диван/виена/виена.jpg',
'../../../assets/images/диван/вилиян/вилиян.jpg',
'../../../assets/images/диван/мелвин/мелвин.jpg',
'../../../assets/images/диван/рино/рино.jpg'];

const garderob = [
'../../../assets/images/гардероб/аркон/аркон.jpg',
'../../../assets/images/гардероб/марк/марк.jpg',
'../../../assets/images/гардероб/медея/медея.jpg',
'../../../assets/images/гардероб/муун/муун.jpg',
'../../../assets/images/гардероб/офелия/офелия.jpg',
'../../../assets/images/гардероб/патрик/патрик.jpg',
'../../../assets/images/гардероб/порто/порто.jpg',
'../../../assets/images/гардероб/фалкон/фалкон.jpg'];

const kuhnq = [
'../../../assets/images/кухня/вега/вега.jpg',
'../../../assets/images/кухня/естетик/естетик.jpg',
'../../../assets/images/кухня/натура/натура.jpg',
'../../../assets/images/кухня/енира/енира.jpg',
'../../../assets/images/кухня/дарина/дарина.jpg',
'../../../assets/images/кухня/стило/стило.jpg',
'../../../assets/images/кухня/тереза/тереза.jpg',
'../../../assets/images/кухня/футура/футура.jpg'];



const detski = [
'../../../assets/images/детски/бг/бг.jpg',
'../../../assets/images/детски/доминик/доминик.jpg',
'../../../assets/images/детски/кола/кола.jpg',
'../../../assets/images/детски/котек/котек.jpg',
'../../../assets/images/детски/миколаж/миколаж.jpg',
'../../../assets/images/детски/мис/мис.jpg',
'../../../assets/images/детски/рафи/рафи.jpg',
'../../../assets/images/детски/тони/тони.jpg'];

const masi = [
'../../../assets/images/маси/венеция/венеция.jpg',
'../../../assets/images/маси/висент/висент.jpg',
'../../../assets/images/маси/дея/дея.jpg',
'../../../assets/images/маси/калифорния/калифорния.jpg',
'../../../assets/images/маси/дони/дони.jpg',
'../../../assets/images/маси/егон/егон.jpg',
'../../../assets/images/маси/линда/линда.jpg',
'../../../assets/images/маси/рома/рома.jpg'];

const ofis = [
'../../../assets/images/офис/галео/галео.jpg',
'../../../assets/images/офис/реал/реал.jpg',
'../../../assets/images/офис/рино/рино.jpg',
'../../../assets/images/офис/рио/рио.jpg',
'../../../assets/images/офис/руди/руди.jpg',
'../../../assets/images/офис/класик/класик.jpg',
'../../../assets/images/офис/тоби/тоби.jpg',
'../../../assets/images/офис/феликс/феликс.jpg'];

const sekciq = [
'../../../assets/images/секция/дормина/dormina.jpg',
'../../../assets/images/секция/ива/ива.jpg',
'../../../assets/images/секция/корин/корин.jpg',
'../../../assets/images/секция/морена/morena.jpg',
'../../../assets/images/секция/наталия/наталия.jpg',
'../../../assets/images/секция/невена/невена.jpg',
'../../../assets/images/секция/роси/роси.jpg',
'../../../assets/images/секция/шаная/shanaia.jpg'];

const spalnq = [
'../../../assets/images/спалня/алпи/алпи.jpg',
'../../../assets/images/спалня/вероника/вероника.jpg',
'../../../assets/images/спалня/диема/диема.jpg',
'../../../assets/images/спалня/невия/невия.jpg',
'../../../assets/images/спалня/приста/приста.jpg',
'../../../assets/images/спалня/сезони/сезони.jpg',
'../../../assets/images/спалня/стела/стела.jpg',
'../../../assets/images/спалня/ладива/ладива.jpg'];

const stol = [
'../../../assets/images/стол/алваро/алваро.jpg',
'../../../assets/images/стол/диас/диас.jpg',
'../../../assets/images/стол/либер/либер.jpg',
'../../../assets/images/стол/лив/лив.jpg',
'../../../assets/images/стол/марио/марио.jpg',
'../../../assets/images/стол/парис/парис.jpg',
'../../../assets/images/стол/поли/поли.jpg',
'../../../assets/images/стол/федор/федор.jpg'
];

const cat = ['диван','гардероб','кухня','маса','офис','секция','спалня','стол','детски']

export const categories = [
    new CategoryModel(1,'диван',[],divan),
    new CategoryModel(2,'гардероб',[],garderob),
    new CategoryModel(3,'кухня',[],kuhnq),
    new CategoryModel(4,'маса',[],masi),
    new CategoryModel(5,'офис',[],ofis),
    new CategoryModel(6,'секция',[],sekciq),
    new CategoryModel(7,'спалня',[],spalnq),
    new CategoryModel(8,'стол',[],stol),
    new CategoryModel(9,'детски',[],detski)

];

(function(){

    for (let i = 0; i < cat.length; i++) {
        let products = [];

        for (let a = 0; a < stol.length; a++) {
            
            products.push(new Product());
            
        }

        
    }
    
})()

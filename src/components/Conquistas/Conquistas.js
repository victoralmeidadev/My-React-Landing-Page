import React, { Component } from "react";

export class Conquistas extends Component {
  render() {
    return (
      <section
        className="resume-section p-3 p-lg-5 d-flex align-items-center"
        id="awards"
      >
        <div className="w-100">
          <h2 className="mb-5">Conquistas &amp; Certificações</h2>
          <ul className="fa-ul mb-0">
            <li>
              <i className="fa-li fa fa-trophy text-warning" />1<sup>ro</sup>{" "}
              lugar - Campeão 1ª Copa Hagnos de Taekwondo 2018
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Udemy - Curso Completo do Desenvolvedor NodeJS e MongoDB 2018
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Udemy - Desenvolvedor Multiplataforma Android/IOS com React e
              Redux 2018
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Udemy - Amazon Web Services (AWS) 2018
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Olimpíada Brasileira de Robótica - Juiz 2017
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Artes marciais - Graduação faixa verde (Sankyo) em Aikido
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              Artes marciais - Graduação faixa laranja em Taekwondo
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              FGV - Introdução à Adminstração Estratégica 2015
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />
              FGV - Motivação nas Organizações 2015
            </li>

            <li>
              <i className="fa-li fa fa-trophy text-warning" />1<sup>ro</sup>{" "}
              lugar - Campeão regional de xadrez modalidade de grupos (4
              pessoas), mesa 1 em 2013
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />4<sup>to</sup>{" "}
              lugar - 4º/16 Lugar xadrez modalidade individual pela escola SENAI
              “Antônio Adolpho Lobbe” em 2013.
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />1<sup>ro</sup>{" "}
              lugar - Campeão regional de xadrez modalidade de grupos (4
              pessoas), mesa 1 em 2012
            </li>
            <li>
              <i className="fa-li fa fa-trophy text-warning" />8<sup>vo</sup>{" "}
              lugar - 8º/16 Lugar xadrez modalidade individual pela escola SENAI
              “Antônio Adolpho Lobbe” em 2012.
            </li>
          </ul>
        </div>
      </section>
    );
  }
}

export default Conquistas;

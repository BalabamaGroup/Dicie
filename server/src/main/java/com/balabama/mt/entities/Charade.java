package com.balabama.mt.entities;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("CHARADE")
public class Charade extends Game{

}

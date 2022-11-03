package com.balabama.mt.entities.user;

import com.balabama.mt.dtos.user.UserStateDto;
import com.balabama.mt.entities.user.User;
import java.util.ArrayList;
import java.util.List;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Inheritance;
import javax.persistence.InheritanceType;
import javax.persistence.JoinColumn;
import javax.persistence.MapsId;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Table(name = "user_state")
@Data
@NoArgsConstructor
@Inheritance(strategy = InheritanceType.TABLE_PER_CLASS)
public class UserState {

    @Id
    @Column(name = "user_id")
    private Long id;

    @OneToOne
    @MapsId
    @JoinColumn(name = "user_id")
    @ToString.Exclude
    private User user;

    public UserState(User user) {
        this.id = user.getId();
        this.user = user;
    }

    public static List<User> addUserStates(List<User> users){
        return new ArrayList<>();
    }

    public UserStateDto createDto(){
        return new UserStateDto(this);
    }

    public void preFinish(){

    }
}
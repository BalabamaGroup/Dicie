package com.balabama.mt.entities.rooms;

import com.balabama.mt.converters.Util;
import com.google.gson.Gson;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;
import org.hibernate.annotations.Type;

import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "chat")
@Data
@NoArgsConstructor
public class Chat {
    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    @Column(name = "id", updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
    @Type(type = "uuid-char")
    private UUID id;
    public static final int LOG_MAX_LENGTH = 65535;
    public static final String LINE_SEPARATOR = "\n";
    @Column(columnDefinition = "TEXT",length = LOG_MAX_LENGTH)
    private String log = "";

    public Chat(UUID id) {
        this.id = id;
    }

    public void appendLog(String line) {
        this.log = Util.appendRollingLog(this.log, line, LOG_MAX_LENGTH);
    }

    public String getJson(){
        return new Gson().toJson(Arrays.asList(log.split(LINE_SEPARATOR)));
    }

}

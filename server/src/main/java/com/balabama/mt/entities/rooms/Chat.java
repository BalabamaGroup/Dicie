package com.balabama.mt.entities.rooms;

import com.balabama.mt.converters.Util;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Type;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "chat")
@Data
@NoArgsConstructor
public class Chat {
    @Id
    @Column(name = "id", updatable = false, nullable = false, columnDefinition = "VARCHAR(36)")
    @Type(type = "uuid-char")
    private UUID id;
    public static final int LOG_MAX_LENGTH = 65535;
    public static final String LINE_SEPARATOR = "\n";
    @Column(columnDefinition = "TEXT", length = LOG_MAX_LENGTH)
    private String log = "";

    public Chat(UUID id) {
        this.id = id;
    }

    public void appendLog(String line) {
        this.log = Util.appendRollingLog(this.log, line, LOG_MAX_LENGTH);
    }

    public List<String> getJson() {
        if (log.equals("")) {
            return new ArrayList<>();
        }
        return Arrays.asList(log.split(LINE_SEPARATOR));
    }

}

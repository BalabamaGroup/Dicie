package com.balabama.mt.converters;

import lombok.extern.slf4j.Slf4j;

@Slf4j
public class Util {

    public static String appendRollingLog(String log, String line, int maxLogLength) {
        if (log == null) {
            log = "";
        }
        String newLog = log + line + "\n";
        while (newLog.length() >= maxLogLength) {
            newLog = newLog.substring(newLog.indexOf("\n") + 1);
        }
        return newLog;
    }
}
